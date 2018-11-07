import { expect } from "chai";
import { Storage } from "../lib";
declare const storage: Storage;

import "mocha";

describe("Storage", () => {
    it("should not exist", () => {
        expect(typeof storage).to.eq("undefined");
    });
    it("should not be referenceable", () => {
        expect(() => storage).to.throw(ReferenceError);
    });
});
