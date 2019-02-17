require_relative "p05_hash_map"
require_relative "p04_linked_list"

class LRUCache
  def initialize(max, prc)
    @map = HashMap.new
    @store = LinkedList.new
    @max = max
    @prc = prc
  end

  def count
    @map.count
  end

  # get value with key
  def get(key)
    unless @map.include?(key)
      eject! if @map.count >= @max
      calc!(key)
    else
      update_node!(key)
    end
  end

  def to_s
    "Map: " + @map.to_s + '\n' + "Store: " + @store.to_s
  end

  private

  def calc!(key)
    # suggested helper method; insert an (un-cached) key
    val = @prc.call(key)
    node = @store.append(key, val)
    @map.set(key, node)
    val
  end

  def update_node!(key)
    # suggested helper method; move a node to the end of the list
    node = @map.get(key)
    node.remove
    node = @store.append(node.key, node.val)
    @map.set(key, node)
  end

  def eject!
    key = @store.first.key
    @map.delete(key)
    @store.remove(key)
  end
end
