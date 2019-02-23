require_relative "graph"

# Kahn's
# O(|V| + |E|).
def topological_sort(vertices)
  sorted_vertices = []
  queue = []
  edges = {}

  vertices.each do |vertex|
    in_edges_cost = vertex.in_edges.reduce(0) { |acc, edge| acc + edge.cost }
    if in_edges_cost === 0
      queue << vertex
    else
      edges[vertex] = in_edges_cost
    end
  end

  until queue.empty?
    vertex = queue.shift

    vertex.out_edges.each do |edge|
      to_vertex = edge.to_vertex
      edges[to_vertex] -= edge.cost
      queue << to_vertex if edges[to_vertex] == 0
    end

    sorted_vertices << vertex
  end

  sorted_vertices
end

# Tarjans

# def topological_sort(vertices)
# end

# def dfs!(vertex, explored, ordering)
# end
