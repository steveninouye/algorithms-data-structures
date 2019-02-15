require_relative "heap"

class Array
  def heap_sort!
    len = self.length
    (len - 1).downto(1) do |i|
      BinaryMinHeap.heapify_up(self, i)
    end

    self[0], self[(len - 1)] = self[(len - 1)], self[0]

    (len - 2).times do |i|
      BinaryMinHeap.heapify_down(self, 0, len - 2 - i)
      p self
      self[0], self[(len - 2 - i)] = self[(len - 2 - i)], self[0]
    end
    self.reverse!
  end
end
