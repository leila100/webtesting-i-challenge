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

  describe("fail(item)", () => {
    it("Should decrease the durability by 5, if the item's enhancement is less than 15.", () => {
      //Arrange
      const expected = {
        name: "Item 5",
        durability: 50,
        enhancement: 12
      }

      //Act
      const actual = enhancer.fail({
        name: "Item 5",
        durability: 55,
        enhancement: 12
      })

      //assert
      expect(actual).toEqual(expected)
    })

    it("Should decrease the durability by 10, if the item's enhancement is 15 or more.", () => {
      //Arrange
      const expected = {
        name: "Item 6",
        durability: 2,
        enhancement: 16
      }

      //Act
      const actual = enhancer.fail({
        name: "Item 6",
        durability: 12,
        enhancement: 16
      })

      //assert
      expect(actual).toEqual(expected)
    })

    it("Should decrease the enhancement by 1, if the item's enhancement is more than 16.", () => {
      //Arrange
      const expected = {
        name: "Item 7",
        durability: 2,
        enhancement: 17
      }

      //Act
      const actual = enhancer.fail({
        name: "Item 7",
        durability: 12,
        enhancement: 18
      })

      //assert
      expect(actual).toEqual(expected)
    })

    it("Should set durability to 0, if decreasing with make durability negative", () => {
      //Arrange
      const expected = {
        name: "Item 8",
        durability: 0,
        enhancement: 15
      }

      //Act
      const actual = enhancer.fail({
        name: "Item 8",
        durability: 8,
        enhancement: 15
      })

      //assert
      expect(actual).toEqual(expected)
    })

    it("Should set durability to 0, if decreasing with make durability negative", () => {
      //Arrange
      const expected = {
        name: "Item 9",
        durability: 0,
        enhancement: 8
      }

      //Act
      const actual = enhancer.fail({
        name: "Item 9",
        durability: 4,
        enhancement: 8
      })

      //assert
      expect(actual).toEqual(expected)
    })
  })
})
