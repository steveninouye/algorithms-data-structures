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

  
end

# Tarjans

def topological_sort(vertices)
end

def dfs!(vertex, explored, ordering)
end
