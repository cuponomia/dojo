import assert from 'assert';
import { App } from './app.js';

describe('App', function() {
    it('should return true', function() {
        const app = new App()
        assert.equal(app.param, true);
    })
})