class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = []
    @prc ||= Proc.new { |x, y| x <=> y }
  end

  def count
    @store.length
  end

  def extract
    raise "no element to extract" if count == 0
    result = @store[0]

    if count > 1
      @store[0] = @store.pop
      self.class.heapify_down(@store, 0, count, &@prc)
    else
      @store.pop
    end

    result
  end

  def peek
    raise "no element to peek" if count == 0
    @store[0]
  end

  def push(val)
    @store.push(val)
    self.class.heapify_up(@store, count - 1, count, &@prc)
  end

  public

  def self.child_indices(len, parent_index)
    [(2 * parent_index) + 1, (2 * parent_index) + 2].select { |i| i < len }
  end

  def self.parent_index(child_index)
    raise "root has no parent" if child_index == 0
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    val = array[parent_idx]
    child_idxs = BinaryMinHeap.child_indices(len, parent_idx)

    if child_idxs.length === 0
      return array
    elsif child_idxs.length === 1
      min_idx = 0
    else
      child1 = array[child_idxs[0]]
      child2 = array[child_idxs[1]]
      min_idx = child2 < child1 ? child_idxs[1] : child_idxs[0]
    end

    if array[min_idx] < val
      array[min_idx], array[parent_idx] = array[parent_idx], array[min_idx]
      BinaryMinHeap.heapify_down(array, min_idx)
    end

    return array
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||= Proc.new { |x, y| x <=> y }
  end
end
