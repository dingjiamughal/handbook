function sleep() {
  return new Promise((resolve, reject) => setTimeout(resolve, 500));
}

it('async', async () => {
  await sleep();
  console.log(1);
});

function mockFunction(shouldCall, cb) {
  if (shouldCall) {
    return cb(42);
  }
}
it('mock function', () => {
  const mockCb = jest.fn();
  mockFunction(true, mockCb);
  expect(mockCb).toHaveBeenCalled();
  expect(mockCb).toHaveBeenCalledWith(42);
  expect(mockCb).toHaveBeenCalledTimes(1);
});
