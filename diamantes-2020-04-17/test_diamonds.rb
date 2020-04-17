require_relative "diamonds"
require "test/unit"
 
class TestDiamonds < Test::Unit::TestCase
  # numeroEspacosAntes = abs(indexLetraDiamante - indexLetraLinha)
  # numeroEspacosEntre = indexLetraLinha * 2 - 1
  # 
  def test_B_letter_input
    
    result = [
      " A",
      "B B\n"
    ].join("\n")
    
    assert_equal(result, DiamondGenerator.above("B"))
  end
  
  def test_c_letter_input
    
    result = [
      "  A",
      " B B",
      "C   C\n"
    ].join("\n")
    
    assert_equal(result, DiamondGenerator.above("C"))
  end
  
  
  def test_b_letter_bottom_input
    
    assert_equal(" A\n", DiamondGenerator.bottom("B"))
  end
  
  def test_calculate_blank_space_first_it_no_blank
    assert_equal(0, DiamondGenerator.leftOutsideSpaces("B", "B"))
  end
  
  def test_calculate_blank_space_second_it_1_blank
    assert_equal(1, DiamondGenerator.leftOutsideSpaces("B", "A"))
  end
  
  def test_calculate_blank_space_inside_it_3_blank
    assert_equal(3, DiamondGenerator.spacesInside("C"))
  end
  
  def test_full_B_size_diamond
    result = [
      " A",
      "B B",
      " A\n"
    ].join("\n")
    
    assert_equal(result, DiamondGenerator.generate("B"))
  end
  
  def test_full_E_size_diamond
    result = [
      "    A",
      "   B B",
      "  C   C",
      " D     D",
      "E       E",
      " D     D",
      "  C   C",
      "   B B",
      "    A\n"
    ].join("\n")
    
    assert_equal(result, DiamondGenerator.generate("E"))
  end
  
 
end
