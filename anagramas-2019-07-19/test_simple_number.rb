require_relative "simple_number"
require "test/unit"
 
class TestSimpleNumber < Test::Unit::TestCase
  
  def test_one_letter_input
    assert_equal(["a"], AnagramCreator.generate("a"))
  end
  
  def test_two_letter_input
    assert_equal(["ab", "ba"], AnagramCreator.generate("ab"))
  end
  
  def test_three_letter_input
    assert_equal(["abc", "acb", "bac", "bca", "cab", "cba"], AnagramCreator.generate("abc"))
  end
 
end

#[biro,bior,brio,broi,boir,bori
#ibro,ibor,irbo,irob,iobr,iorb
#rbio,rboi,ribo,riob,roib,robi
#obir,obri,oibr,oirb,orbi,orib]