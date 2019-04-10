const enhancer = require("./enhancer.js")

describe("enhancer.js", () => {
  describe("repair(item)", () => {
    it("durability should be changed to 100. Item's other properties unchanged", () => {
      //Arrange
      const expected = {
        name: "Item 1",
        durability: 100,
        enhancement: 10
      }

      //Act
      const actual = enhancer.repair({
        name: "Item 1",
        durability: 50,
        enhancement: 10
      })

      //assert
      expect(actual).toEqual(expected)
    })

    it("durability should be set to 100 even if the item didn't have a durability property. . Item's other properties unchanged", () => {
      //Arrange
      const expected = {
        name: "Item 2",
        durability: 100,
        enhancement: 5
      }

      //Act
      const actual = enhancer.repair({
        name: "Item 2",
        enhancement: 5
      })

      //assert
      expect(actual).toEqual(expected)
    })
  })
})
