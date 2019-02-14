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
    child_idxs = self.class(len, parent_idx)
    child1, child2 = array[child_idxs[0]], aarray[child_idxs[1]]
    if val < child1
      if child1 < child2
        # swap with child 1
      else 
        # swap with child 2
      end
    elsif val < child2
      # swap with child 2
    end
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||= Proc.new { |x, y| x <=> y }
  end
end
