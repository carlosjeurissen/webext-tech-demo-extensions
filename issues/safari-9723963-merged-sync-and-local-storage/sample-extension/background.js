/* global browser */

'use strict';

(async function () {
  await browser.storage.sync.set({
    test_sync: true,
  });

  await browser.storage.local.set({
    test_local: true,
  });

  const storedLocal = await browser.storage.local.get();
  console.log(storedLocal);

  const storedSynced = await browser.storage.local.get();
  console.log(storedSynced);
}());
