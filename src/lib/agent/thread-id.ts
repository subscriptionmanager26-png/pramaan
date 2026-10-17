const THREAD_ID = /^[A-Za-z0-9._:-]{1,64}$/;

export function isValidThreadId(id: string) {
  return THREAD_ID.test(id);
}

export function newThreadId() {
  return `t_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}
