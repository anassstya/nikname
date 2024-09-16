import { Validator } from "../app";

test.each([
    ['testName', true],
    ['test11Name', true],
    ['test-Name', true],
    ['test_Name', true],
    ['test777Name', true],
    ['test7007Name', false],
    ['test70707Name', false],
    ['1testName1', false],
    ['TESTNAME', true],
    ['___testname___', false],
    ['t1e2s3t4N5a6m7e', true],
    ['234234234wewer-----', false],
    ['234234234wewer-----', false],
    ['234234234wewer-----', false],
])('check nameValidity', (name, result) => {
  let a = new Validator();
  expect(a.validateUsername(name)).toBe(result)
})