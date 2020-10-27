const collectionReducer = require('./collection.reducer')

describe('reset collection', () => {
    it('should reset collection', () => {
        const resetAction = {
            type: 'RESET_COLLECTION'
        };
    expect(collectionReducer([], resetAction)).toEqual([])
    })
})