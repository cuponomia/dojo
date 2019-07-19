# Problem http://dojopuzzles.com/problemas/exibe/anagramas/

class AnagramCreator

  def self.generate(word)
    anagram = []
    splitted = word.split("")

    return [ word ] if word.length == 1
    return self.twoLetterAnagram(splitted) if splitted.length == 2
    
    shifted = splitted.shift()
    anagram.push(shifted + generate(splitted.join()).join())
    return anagram
  end
  
  def self.twoLetterAnagram(word)
    return [word[0]+word[1], word[1]+word[0]]
  end
  
end

# divide and conquer

#[ a , b, c ]

#len (3)
# continue;
 
#if len (2)
#    twoLetterAnagram("bc") => [ "bc", "cb" ]
    
#"abc", "acb"

#i = 2
#item = b

#"c a"
