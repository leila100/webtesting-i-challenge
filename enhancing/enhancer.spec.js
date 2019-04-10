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

  describe("succeed(item", () => {
    it("enhancement should be incremented by 1. Item's other properties unchanged", () => {
      //Arrange
      const expected = {
        name: "Item 3",
        durability: 50,
        enhancement: 13
      }

      //Act
      const actual = enhancer.succeed({
        name: "Item 3",
        durability: 50,
        enhancement: 12
      })

      //assert
      expect(actual).toEqual(expected)
    })

    it("enhancement should be incremented by 1, only if less than 20. Item's other properties unchanged", () => {
      //Arrange
      const expected = {
        name: "Item 4",
        durability: 30,
        enhancement: 20
      }

      //Act
      const actual = enhancer.succeed({
        name: "Item 4",
        durability: 30,
        enhancement: 20
      })

      //assert
      expect(actual).toEqual(expected)
    })
  })
})
