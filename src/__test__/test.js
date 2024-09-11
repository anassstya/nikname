import { Validator } from "../app";

test('should check userName', ()=> {
  let result = new Validator();
  expect(result.validateUsername('ka-14-te')).toBe(true)
})