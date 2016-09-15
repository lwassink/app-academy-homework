#!/usr/bin/ruby
#
# Copyright (C) 2016 Luke Wassink <lwassink@gmail.com>
#
# Distributed under terms of the MIT license.
#


def sum_to(n)
  return 0 if n <= 0

  n + sum_to(n-1)
end

def add_numbers(nums)
  return 0 if nums.empty?

  num = nums.pop
  num + add_numbers(nums)
end

def gamma_fnc(n)
  return nil if n <= 0
  return 1 if n == 1

  (n-1) * gamma_fnc(n-1)
end

def includes?(array, target)
  return false if array.empty?

  return true if array.pop == target
  includes?(array, target)
end

def num_occur(array, target)
  return 0 if array.empty?

  last = array.pop
  if last == target
    num_occur(array, target) + 1
  else
    num_occur(array, target)
  end
end

def add_to_twelve?(array)
  return false if array.length <= 1
  return true if array[0] + array[1] == 12

  add_to_twelve?(array[1..-1])
end

def sorted?(array)
  return true if array.length <= 1

  return false if array[0] > array[1]
  sorted?(array[1..-1])
end

def reverse(string)
  return string if string.length <= 1

  string[1..-1] + string[0]
end

