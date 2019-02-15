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
    prc ||= Proc.new { |x, y| x <=> y }
    val = array[parent_idx]
    child_idxs = BinaryMinHeap.child_indices(len, parent_idx)

    if child_idxs.length === 0
      return array
    elsif child_idxs.length === 1
      min_idx = child_idxs[0]
    else
      child1 = array[child_idxs[0]]
      child2 = array[child_idxs[1]]
      min_idx = prc.call(child1, child2) === 1 ? child_idxs[1] : child_idxs[0]
    end

    if prc.call(val, array[min_idx]) === 1
      array[min_idx], array[parent_idx] = array[parent_idx], array[min_idx]
      BinaryMinHeap.heapify_down(array, min_idx, len, &prc)
    end

    return array
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||= Proc.new { |x, y| x <=> y }

    return array if child_idx === 0

    parent_idx = BinaryMinHeap.parent_index(child_idx)

    if (prc.call(array[parent_idx], array[child_idx])) === 1
      array[child_idx], array[parent_idx] = array[parent_idx], array[child_idx]
      BinaryMinHeap.heapify_up(array, parent_idx, &prc)
    end

    return array
  end
end
