require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)!
 Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:brownie) { Dessert.new("brownie", 100) }

  describe "#initialize" do
    it "sets a type" do
      expect(brownie.type).to eq("brownie")
    end

    it "sets a quantity" do
      expect(brownie.quantity).to be_an(Integer)
      expect(brownie.quantity).to be_positive
    end

    it "starts ingredients as an empty array" do
      expect(brownie.ingredients).to eq([])
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("cake", "tons") }.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    subject(:dessert) do
      test = Dessert.new("test", 30)
      test.add_ingredient("flour")
      test
    end

    it "adds an ingredient to the ingredients array" do
      expect(dessert.ingredients).to include('flour')
    end
  end

  describe "#mix!" do
    subject(:dessert) do
      test = Dessert.new("test", 30)
      test.add_ingredient("flour")
      test.add_ingredient("oil")
      test.add_ingredient("nails")
      test.add_ingredient("paper")
      test
    end

    it "shuffles the ingredient array" do
      ingredients = %w[flour oil nails paper]
      dessert.mix!
      expect(p dessert.ingredients).to_not eq(ingredients)
      expect(dessert.ingredients.sort).to eq(ingredients.sort)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      expect(brownie.eat(40)).to eq(60)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect{ brownie.eat(200) }.to raise_error("not enough left!")
    end
  end
end
