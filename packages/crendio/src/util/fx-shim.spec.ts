export const mockOn = jest.fn((name: string, ...args: any[]) => {
  console.log(`called with name`, name);
});

const mockOnNet = jest.fn((name: string, ...args: any[]) => {
  console.log(`net event with name ${name}`);
});

const mockRegisterCommand = jest.fn(
  (name: string, handler: any, restrict: boolean) => {
    console.log(`command registerd`, name);
  }
);

const mockIsDuplicity = jest.fn(() => {
  return false;
});

Object.defineProperty(global, "on", {
  value: mockOn,
});

Object.defineProperty(global, "onNet", {
  value: mockOnNet,
});

Object.defineProperty(global, "RegisterCommand", {
  value: mockRegisterCommand,
});

Object.defineProperty(global, "IsDuplicityVersion", {
  value: mockIsDuplicity,
});
