import { c } from 'react/compiler-runtime';
import 'react';
import { atomStateGenerator } from '@gaddario98/react-state';

const {
  atom: notificationAtom,
  useValue: useNotificationValue,
  useState: useNotificationState
} = atomStateGenerator({
  defaultValue: null,
  key: 'reactNotificationAtom',
  persist: false
});

const useNotificationSet = () => {
  const [, setValue] = useNotificationState();
  return setValue;
};
const useNotification = t0 => {
  const $ = c(8);
  const ns = t0 === undefined ? "notifications" : t0;
  const setNotification = useNotificationSet();
  let t1;
  if ($[0] !== ns || $[1] !== setNotification) {
    t1 = notification => {
      setNotification(Object.assign(Object.assign({
        ns
      }, notification), {
        id: Date.now().toString()
      }));
    };
    $[0] = ns;
    $[1] = setNotification;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const showNotification = t1;
  let t2;
  if ($[3] !== setNotification) {
    t2 = () => {
      setNotification(null);
    };
    $[3] = setNotification;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  const clearNotification = t2;
  let t3;
  if ($[5] !== clearNotification || $[6] !== showNotification) {
    t3 = {
      showNotification,
      clearNotification
    };
    $[5] = clearNotification;
    $[6] = showNotification;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  return t3;
};

export { notificationAtom, useNotification, useNotificationState, useNotificationValue };
//# sourceMappingURL=index.mjs.map
