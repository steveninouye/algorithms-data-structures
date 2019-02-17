require_relative "heap"

class Array
  def heap_sort!
    (2..self.length).each do |size|
      BinaryMinHeap.heapify_up(self, size - 1, size)
    end

    self.length.downto(2) do |size|
      self[0], self[size - 1] = self[size - 1], self[0]
      BinaryMinHeap.heapify_down(self, 0, size - 1)
    end

    self.reverse!
  end
end
