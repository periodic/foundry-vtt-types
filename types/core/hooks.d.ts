declare class Hooks {
  /**
   * Register a callback handler which should be triggered when a hook is triggered.
   *
   * @param hook	The unique name of the hooked event
   * @param fn	The callback function which should be triggered when the hook event occurs
   */
  static on(hook: string, fn: Function): number;

  /**
   * Called during initialization of Foundry
   */
  static on(hook: 'init', fn: Function): number;

  /**
   * Called during game setup
   */
  static on(hook: 'setup', fn: Function): number;

  /**
   * Called when Foundry is ready
   */
  static on(hook: 'ready', fn: Function): number;

  /**
   * Register a callback handler for an event which is only triggered once the first time the event occurs.
   * After a "once" hook is triggered the hook is automatically removed.
   *
   * @param hook	The unique name of the hooked event
   * @param fn	The callback function which should be triggered when the hook event occurs
   */
  static once(hook: string, fn: Function): number;

  /**
   * Called once during initialization of Foundry
   */
  static once(hook: 'init', fn: Function): number;

  /**
   * Called once during game setup
   */
  static once(hook: 'setup', fn: Function): number;

  /**
   * Called once when Foundry is ready
   */
  static once(hook: 'ready', fn: Function): number;

  /**
   * Unregister a callback handler for a particular hook event
   *
   * @param hook	The unique name of the hooked event
   * @param fn	The function that should be removed from the set of hooked callbacks
   */
  static off(hook: string, fn: Function | number): void;
  /**
   * Unregister a callback handler for a particular hook event
   *
   * @param hook	The unique name of the hooked event
   * @param hookId	The ID of the hook returned from a previous hook setup call.
   */
  static off(hook: string, hookId: number): void;

  /**
   * Call all hook listeners in the order in which they were registered
   * Hooks called this way can not be handled by returning false and will always trigger every hook callback.
   *
   * @param hook	The hook being triggered
   * @param args	Arguments passed to the hook callback functions
   */

  static callAll(hook: string, ...args: any[]): boolean;

  /**
   * Call hook listeners in the order in which they were registered.
   * Continue calling hooks until either all have been called or one returns `false`.
   *
   * Hook listeners which return `false` denote that the original event has been adequately handled and no further
   * hooks should be called.
   *
   * @param hook	The hook being triggered
   * @param args	Arguments passed to the hook callback functions
   */
  static call(hook: string, ...args: any[]): boolean;
}
