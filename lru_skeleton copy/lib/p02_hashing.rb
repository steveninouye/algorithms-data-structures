class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    result = 0
    each_with_index do |num, i|
      result += num.hash * i
    end
    result
  end
end

class String
  def hash
    result = 0
    letters = ("a".."z").to_a + [" "] + ("A".."Z").to_a
    letters += (0..9).to_a.map { |n| n.to_s }
    i = 0
    while i < length
      ltr_idx = letters.index(self[i])
      result += ltr_idx * i
      i += 1
    end
    result
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    result = 0
    each do |k, v|
      key_hash = (k.to_s.hash + 3) * 7
      val_hash = (v.to_s.hash + 9) * 8
      result += key_hash + val_hash
    end
    result
  end
end
