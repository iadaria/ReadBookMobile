const seen: any[] = [];

export function replacer(key: any, val: any) {
  if (val != null && typeof val == 'object') {
    if (seen.indexOf(val) >= 0) {
      return;
    }
    seen.push(val);
  }
  return val;
}
