import { debounce } from '@/app/_utils/debounce';
import { describe, it, expect, vi } from 'vitest';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.restoreAllMocks();
  });

  it('should delay the function execution until the specified wait time has passed', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 200);

    debouncedFn();
    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should execute the function immediately if immediate is true', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 200, true);

    debouncedFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(200);
    expect(mockFn).toHaveBeenCalledTimes(1); // It should not call again
  });

  it('should cancel the previous timer if called again within the wait period', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 200);

    debouncedFn();
    vi.advanceTimersByTime(100);
    debouncedFn(); // re-call within wait time
    vi.advanceTimersByTime(100);
    expect(mockFn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should preserve the context when calling the function', () => {
    const context = { value: 42 };
    const mockFn = vi.fn(function () {
      return this.value;
    });
    const debouncedFn = debounce(mockFn, 200).bind(context);

    debouncedFn();
    vi.advanceTimersByTime(200);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn.mock.results[0].value).toBe(42);
  });
});
