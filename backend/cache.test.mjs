import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
function serviceWorker(cacheControl='public') {
    const events={}, stored=[];
    vm.runInNewContext(readFileSync(new URL('../sw.js',import.meta.url),'utf8'),{
        URL, self:{location:{origin:'https://ktalkcoach.online'},addEventListener:(name,handler)=>{events[name]=handler;}},
        fetch:async()=>new Response('content',{status:200,headers:{'Cache-Control':cacheControl}}),
        caches:{open:async()=>({put:async request=>stored.push(request.url)})}
    });
    return {events,stored};
}
test('private feedback and admin API calls bypass service worker cache',()=>{
    const {events}=serviceWorker();let intercepted=false;
    events.fetch({request:{method:'GET',url:'https://ktalkcoach-feedback.div5733.workers.dev/admin/feedback'},respondWith:()=>{intercepted=true;}});
    assert.equal(intercepted,false);
});
test('no-store responses are not cached, including same-origin responses',async()=>{
    const {events,stored}=serviceWorker('private, no-store');let promise;
    events.fetch({request:{method:'GET',url:'https://ktalkcoach.online/private-test'},respondWith:p=>{promise=p;}});
    await promise;assert.deepEqual(stored,[]);
});
