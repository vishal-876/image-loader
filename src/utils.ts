export const throttle = (func:any, delay: any) => {
    let timeout: any;
    return () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          func();
          timeout = null;
        }, delay);
      }
    };
  };
  