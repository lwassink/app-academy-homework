class Stack
  def initialize
    @ivar = []
  end

  def add(el)
    @ivar.push(el)
  end

  def remove
    @ivar.pop
  end

  def show
    @ivar
  end
end

class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.unshift(el)
  end

  def dequeue
    @queue.pop
  end

  def show
    @queue
  end
end

class Map
  def initialize
    @data = []
  end

  def assign(key, value)
    remove(key)
    @data << [key, value]
  end

  def lookup(key)
    _, value = @data.find { |k, _| k == key }
    value
  end

  def remove(key)
    @data.delete_if { |k, _| k == key }
  end

  def show
    @data
  end
end
