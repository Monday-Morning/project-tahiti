import { fetchAndActivate, getValue } from 'firebase/remote-config';
import { remoteConfig } from './firebase';

export let isLivePageVisible = false;

export async function initRemoteConfig() {
  const remote = await remoteConfig();
  if (remote) {
    remote.settings.minimumFetchIntervalMillis = 3600000; // 3 hours,for testing set this value to 0

    remote.defaultConfig = {
      isLivePageVisible: false,
    };

    await fetchAndActivate(remote);

    isLivePageVisible = getValue(remote, 'isLivePageVisible').asBoolean();
  }
}
initRemoteConfig();
