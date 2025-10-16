
// //Default timer 
// const INTERVAL_DEFAULT = 60;

// function settings(){
//     return new Promise((resolve) => {
//         chrome.storage.sync.get(["mh_interval", "mh_sound"], (res) => {
//             const interval = Number(res.mh_interval ?? INTERVAL_DEFAULT);
//             const sound = Boolean(res.mh_sound ?? false);
//             resolve({interval, sound});
//         })
//     })
// }

// async function scheduleAlarm (){
//     const {interval} = await settings();
    
//     //clear an old alarm if it exist 
//     await chrome.alarms.clear(mh_checkin)
//     chrome.alarms

// }


// //when alarms rings, helper has to show
// async function showCheckIn(){
//     chrome.tabs.query ({active: true, currentWindow: })
// }