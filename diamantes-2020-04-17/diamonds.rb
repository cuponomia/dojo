# Problem http://dojopuzzles.com/problemas/exibe/diamantes/

class DiamondGenerator
  
  def self.generate(word)
    above(word) + bottom(word)
  end

  def self.above(word)
    result = (" "*leftOutsideSpaces(word, "A")) + "A" + "\n"
    
    for i in 66..word.ord do
      result += (" "*leftOutsideSpaces(word, i.chr)) + i.chr + (" "*spacesInside(i.chr)) + i.chr + "\n"
    end
    
    return result
  end
  
  
  def self.bottom(word)
    result = ""
   
    for i in (word.ord - 1).downto(66) do
      result += (" "*leftOutsideSpaces(word, i.chr)) + i.chr + (" "*spacesInside(i.chr)) + i.chr + "\n"
    end
    
    result += (" "*leftOutsideSpaces(word, "A")) + "A" + "\n"
    
    return result
  end
  
  def self.leftOutsideSpaces(inputLetter, letter)
    inputIndex = inputLetter.ord
    letterIndex = letter.ord
    inputIndex - letterIndex
  end
  
  
  def self.spacesInside(letter)
    letterIndex = letter.ord - 65
  
    (letterIndex * 2) - 1
  end
  
end





# Interators

# residents = ["Ford", "Carter", "Reagan", "Bush1", "Clinton", "Bush2"]
# presidents.each {|prez| puts prez}

  