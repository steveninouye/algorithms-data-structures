class MaxIntSet
  def initialize(max)
    @max = max
    @set = Set.new()
  end

  def insert(num)
    raise "Out of bounds" unless is_valid?(num)
    @set.add(num)
  end

  def remove(num)
    @set.delete?(num)
  end

  def include?(num)
    @set.include?(num)
  end

  private

  def is_valid?(num)
    num <= @max && num >= 0
  end

  def validate!(num)
  end
end

class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    bucket_num = num % 20
    @store[bucket_num]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    resize! if @count == num_buckets
    unless self[num].include?(num)
      @count += 1
      self[num] << num
    end
  end

  def remove(num)
    if self[num].include?(num)
      self[num].delete(num)
      @count -=1
    end
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    bucket_num = num % num_buckets
    @store[bucket_num]
  end

  def num_buckets
    @store.length
  end

  def resize!
    prev = @store
    @store = Array.new(num_buckets * 2) { Array.new }
    @count = 0
    prev.each do |bucket|
      bucket.each { |val| insert(val) }
    end
  end
end
