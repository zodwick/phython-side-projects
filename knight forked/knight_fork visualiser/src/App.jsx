import { useState } from 'react';
import './App.css'





export default function Board() {
  const ot_values=[['♞', 3, 2, 3, 2, 3, 4, 5, 3, 4, 1, 2, 3, 4, 3, 4, 2, 1, 4, 3, 2, 3, 4, 5, 3, 2, 3, 2, 3, 4, 3, 4, 2, 3, 2, 3, 4, 3, 4, 5, 3, 4, 3, 4, 3, 4, 5, 4, 4, 3, 4, 3, 4, 5, 4, 5, 5, 4, 5, 4, 5, 4, 5, 6], [3, '♞', 3, 2, 3, 2, 3, 4, 2, 3, 2, 1, 2, 3, 4, 3, 1, 2, 1, 4, 3, 2, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3, 3, 2, 3, 2, 3, 4, 3, 4, 4, 3, 4, 3, 4, 3, 4, 5, 3, 4, 3, 4, 3, 4, 5, 4, 4, 5, 4, 5, 4, 5, 4, 5], [2, 3, '♞', 3, 2, 3, 2, 3, 1, 2, 3, 2, 1, 2, 3, 4, 4, 1, 2, 1, 4, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3, 3, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4, 3, 4, 5, 5, 4, 5, 4, 5, 4, 5, 4], [3, 2, 3, '♞', 3, 2, 3, 2, 2, 1, 2, 3, 2, 1, 2, 3, 3, 4, 1, 2, 1, 4, 3, 2, 2, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 4, 4, 3, 4, 3, 4, 3, 4, 3, 3, 4, 3, 4, 3, 4, 3, 4, 4, 5, 4, 5, 4, 5, 4, 5], [2, 3, 2, 3, '♞', 3, 2, 3, 3, 2, 1, 2, 3, 2, 1, 2, 2, 3, 4, 1, 2, 1, 4, 3, 3, 2, 3, 2, 3, 2, 3, 2, 4, 3, 2, 3, 2, 3, 2, 3, 3, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4, 3, 4, 3, 5, 4, 5, 4, 5, 4, 5, 4], [3, 2, 3, 2, 3, '♞', 3, 2, 4, 3, 2, 1, 2, 3, 2, 1, 3, 2, 3, 4, 1, 2, 1, 4, 4, 3, 2, 3, 2, 3, 2, 3, 3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 4, 3, 4, 3, 4, 3, 5, 4, 3, 4, 3, 4, 3, 4, 4, 5, 4, 5, 4, 5, 4, 5], [4, 3, 2, 3, 2, 3, '♞', 3, 3, 4, 3, 2, 1, 2, 3, 2, 4, 3, 2, 3, 4, 1, 2, 1, 3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 4, 3, 2, 3, 2, 3, 5, 4, 3, 4, 3, 4, 3, 4, 4, 5, 4, 3, 4, 3, 4, 3, 5, 4, 5, 4, 5, 4, 5, 4], [5, 4, 3, 2, 3, 2, 3, '♞', 4, 3, 4, 3, 2, 1, 4, 3, 5, 4, 3, 2, 3, 4, 1, 2, 4, 3, 4, 3, 2, 3, 2, 3, 5, 4, 3, 4, 3, 2, 3, 2, 4, 5, 4, 3, 4, 3, 4, 3, 5, 4, 5, 4, 3, 4, 3, 4, 6, 5, 4, 5, 4, 5, 4, 5], [3, 2, 1, 2, 3, 4, 3, 4, '♞', 3, 2, 3, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 3, 4, 2, 1, 4, 3, 2, 3, 4, 5, 3, 2, 3, 2, 3, 4, 3, 4, 2, 3, 2, 3, 4, 3, 4, 5, 3, 4, 3, 4, 3, 4, 5, 4, 4, 3, 4, 3, 4, 5, 4, 5], [4, 3, 2, 1, 2, 3, 4, 3, 3, '♞', 3, 2, 3, 2, 3, 4, 2, 3, 2, 1, 2, 3, 4, 3, 1, 2, 1, 4, 3, 2, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3, 3, 2, 3, 2, 3, 4, 3, 4, 4, 3, 4, 3, 4, 3, 4, 5, 3, 4, 3, 4, 3, 4, 5, 4], [1, 2, 3, 2, 1, 2, 3, 4, 2, 3, '♞', 3, 2, 3, 2, 3, 1, 2, 3, 2, 1, 2, 3, 4, 4, 1, 2, 1, 4, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3, 3, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4, 3, 4, 5], [2, 1, 2, 3, 2, 1, 2, 3, 3, 2, 3, '♞', 3, 2, 3, 2, 2, 1, 2, 3, 2, 1, 2, 3, 3, 4, 1, 2, 1, 4, 3, 2, 2, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 4, 4, 3, 4, 3, 4, 3, 4, 3, 3, 4, 3, 4, 3, 4, 3, 4], [3, 2, 1, 2, 3, 2, 1, 2, 2, 3, 2, 3, '♞', 3, 2, 3, 3, 2, 1, 2, 3, 2, 1, 2, 2, 3, 4, 1, 2, 1, 4, 3, 3, 2, 3, 2, 3, 2, 3, 2, 4, 3, 2, 3, 2, 3, 2, 3, 3, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4, 3, 4, 3], [4, 3, 2, 1, 2, 3, 2, 1, 3, 2, 3, 2, 3, '♞', 3, 2, 4, 3, 2, 1, 2, 3, 2, 1, 3, 2, 3, 4, 1, 2, 1, 4, 4, 3, 2, 3, 2, 3, 2, 3, 3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 4, 3, 4, 3, 4, 3, 5, 4, 3, 4, 3, 4, 3, 4], [3, 4, 3, 2, 1, 2, 3, 4, 4, 3, 2, 3, 2, 3, '♞', 3, 3, 4, 3, 2, 1, 2, 3, 2, 4, 3, 2, 3, 4, 1, 2, 1, 3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 4, 3, 2, 3, 2, 3, 5, 4, 3, 4, 3, 4, 3, 4, 4, 5, 4, 3, 4, 3, 4, 3], [4, 3, 4, 3, 2, 1, 2, 3, 5, 4, 3, 2, 3, 2, 3, '♞', 4, 3, 4, 3, 2, 1, 2, 3, 5, 4, 3, 2, 3, 4, 1, 2, 4, 3, 4, 3, 2, 3, 2, 3, 5, 4, 3, 4, 3, 2, 3, 2, 4, 5, 4, 3, 4, 3, 4, 3, 5, 4, 5, 4, 3, 4, 3, 4], [2, 1, 4, 3, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 3, 4, '♞', 3, 2, 3, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 3, 4, 2, 1, 4, 3, 2, 3, 4, 5, 3, 2, 3, 2, 3, 4, 3, 4, 2, 3, 2, 3, 4, 3, 4, 5, 3, 4, 3, 4, 3, 4, 5, 4], [1, 2, 1, 4, 3, 2, 3, 4, 2, 3, 2, 1, 2, 3, 4, 3, 3, '♞', 3, 2, 3, 2, 3, 4, 2, 3, 2, 1, 2, 3, 4, 3, 1, 2, 1, 4, 3, 2, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3, 3, 2, 3, 2, 3, 4, 3, 4, 4, 3, 4, 3, 4, 3, 4, 5], [4, 1, 2, 1, 4, 3, 2, 3, 1, 2, 3, 2, 1, 2, 3, 4, 2, 3, '♞', 3, 2, 3, 2, 3, 1, 2, 3, 2, 1, 2, 3, 4, 4, 1, 2, 1, 4, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3, 3, 4, 3, 4, 3, 4, 3, 4], [3, 4, 1, 2, 1, 4, 3, 2, 2, 1, 2, 3, 2, 1, 2, 3, 3, 2, 3, '♞', 3, 2, 3, 2, 2, 1, 2, 3, 2, 1, 2, 3, 3, 4, 1, 2, 1, 4, 3, 2, 2, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 4, 4, 3, 4, 3, 4, 3, 4, 3], [2, 3, 4, 1, 2, 1, 4, 3, 3, 2, 1, 2, 3, 2, 1, 2, 2, 3, 2, 3, '♞', 3, 2, 3, 3, 2, 1, 2, 3, 2, 1, 2, 2, 3, 4, 1, 2, 1, 4, 3, 3, 2, 3, 2, 3, 2, 3, 2, 4, 3, 2, 3, 2, 3, 2, 3, 3, 4, 3, 4, 3, 4, 3, 4], [3, 2, 3, 4, 1, 2, 1, 4, 4, 3, 2, 1, 2, 3, 2, 1, 3, 2, 3, 2, 3, '♞', 3, 2, 4, 3, 2, 1, 2, 3, 2, 1, 3, 2, 3, 4, 1, 2, 1, 4, 4, 3, 2, 3, 2, 3, 2, 3, 3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 4, 3, 4, 3, 4, 3], [4, 3, 2, 3, 4, 1, 2, 1, 3, 4, 3, 2, 1, 2, 3, 2, 4, 3, 2, 3, 2, 3, '♞', 3, 3, 4, 3, 2, 1, 2, 3, 2, 4, 3, 2, 3, 4, 1, 2, 1, 3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 4, 3, 2, 3, 2, 3, 5, 4, 3, 4, 3, 4, 3, 4], [5, 4, 3, 2, 3, 4, 1, 2, 4, 3, 4, 3, 2, 1, 2, 3, 5, 4, 3, 2, 3, 2, 3, '♞', 4, 3, 4, 3, 2, 1, 2, 3, 5, 4, 3, 2, 3, 4, 1, 2, 4, 3, 4, 3, 2, 3, 2, 3, 5, 4, 3, 4, 3, 2, 3, 2, 4, 5, 4, 3, 4, 3, 4, 3], [3, 2, 3, 2, 3, 4, 3, 4, 2, 1, 4, 3, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 3, 4, '♞', 3, 2, 3, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 3, 4, 2, 1, 4, 3, 2, 3, 4, 5, 3, 2, 3, 2, 3, 4, 3, 4, 2, 3, 2, 3, 4, 3, 4, 5], [2, 3, 2, 3, 2, 3, 4, 3, 1, 2, 1, 4, 3, 2, 3, 4, 2, 3, 2, 1, 2, 3, 4, 3, 3, '♞', 3, 2, 3, 2, 3, 4, 2, 3, 2, 1, 2, 3, 4, 3, 1, 2, 1, 4, 3, 2, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3, 3, 2, 3, 2, 3, 4, 3, 4], [3, 2, 3, 2, 3, 2, 3, 4, 4, 1, 2, 1, 4, 3, 2, 3, 1, 2, 3, 2, 1, 2, 3, 4, 2, 3, '♞', 3, 2, 3, 2, 3, 1, 2, 3, 2, 1, 2, 3, 4, 4, 1, 2, 1, 4, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3], [2, 3, 2, 3, 2, 3, 2, 3, 3, 4, 1, 2, 1, 4, 3, 2, 2, 1, 2, 3, 2, 1, 2, 3, 3, 2, 3, '♞', 3, 2, 3, 2, 2, 1, 2, 3, 2, 1, 2, 3, 3, 4, 1, 2, 1, 4, 3, 2, 2, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 4], [3, 2, 3, 2, 3, 2, 3, 2, 2, 3, 4, 1, 2, 1, 4, 3, 3, 2, 1, 2, 3, 2, 1, 2, 2, 3, 2, 3, '♞', 3, 2, 3, 3, 2, 1, 2, 3, 2, 1, 2, 2, 3, 4, 1, 2, 1, 4, 3, 3, 2, 3, 2, 3, 2, 3, 2, 4, 3, 2, 3, 2, 3, 2, 3], [4, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 4, 1, 2, 1, 4, 4, 3, 2, 1, 2, 3, 2, 1, 3, 2, 3, 2, 3, '♞', 3, 2, 4, 3, 2, 1, 2, 3, 2, 1, 3, 2, 3, 4, 1, 2, 1, 4, 4, 3, 2, 3, 2, 3, 2, 3, 3, 4, 3, 2, 3, 2, 3, 2], [3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 2, 3, 4, 1, 2, 1, 3, 4, 3, 2, 1, 2, 3, 2, 4, 3, 2, 3, 2, 3, '♞', 3, 3, 4, 3, 2, 1, 2, 3, 2, 4, 3, 2, 3, 4, 1, 2, 1, 3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 4, 3, 2, 3, 2, 3], [4, 3, 4, 3, 2, 3, 2, 3, 5, 4, 3, 2, 3, 4, 1, 2, 4, 3, 4, 3, 2, 1, 2, 3, 5, 4, 3, 2, 3, 2, 3, '♞', 4, 3, 4, 3, 2, 1, 2, 3, 5, 4, 3, 2, 3, 4, 1, 2, 4, 3, 4, 3, 2, 3, 2, 3, 5, 4, 3, 4, 3, 2, 3, 2], [2, 3, 2, 3, 4, 3, 4, 5, 3, 2, 3, 2, 3, 4, 3, 4, 2, 1, 4, 3, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 3, 4, '♞', 3, 2, 3, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 3, 4, 2, 1, 4, 3, 2, 3, 4, 5, 3, 2, 3, 2, 3, 4, 3, 4], [3, 2, 3, 2, 3, 4, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3, 1, 2, 1, 4, 3, 2, 3, 4, 2, 3, 2, 1, 2, 3, 4, 3, 3, '♞', 3, 2, 3, 2, 3, 4, 2, 3, 2, 1, 2, 3, 4, 3, 1, 2, 1, 4, 3, 2, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3], [2, 3, 2, 3, 2, 3, 4, 3, 3, 2, 3, 2, 3, 2, 3, 4, 4, 1, 2, 1, 4, 3, 2, 3, 1, 2, 3, 2, 1, 2, 3, 4, 2, 3, '♞', 3, 2, 3, 2, 3, 1, 2, 3, 2, 1, 2, 3, 4, 4, 1, 2, 1, 4, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 4], [3, 2, 3, 2, 3, 2, 3, 4, 2, 3, 2, 3, 2, 3, 2, 3, 3, 4, 1, 2, 1, 4, 3, 2, 2, 1, 2, 3, 2, 1, 2, 3, 3, 2, 3, '♞', 3, 2, 3, 2, 2, 1, 2, 3, 2, 1, 2, 3, 3, 4, 1, 2, 1, 4, 3, 2, 2, 3, 2, 3, 2, 3, 2, 3], [4, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 2, 2, 3, 4, 1, 2, 1, 4, 3, 3, 2, 1, 2, 3, 2, 1, 2, 2, 3, 2, 3, '♞', 3, 2, 3, 3, 2, 1, 2, 3, 2, 1, 2, 2, 3, 4, 1, 2, 1, 4, 3, 3, 2, 3, 2, 3, 2, 3, 2], [3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 4, 1, 2, 1, 4, 4, 3, 2, 1, 2, 3, 2, 1, 3, 2, 3, 2, 3, '♞', 3, 2, 4, 3, 2, 1, 2, 3, 2, 1, 3, 2, 3, 4, 1, 2, 1, 4, 4, 3, 2, 3, 2, 3, 2, 3], [4, 3, 4, 3, 2, 3, 2, 3, 3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 2, 3, 4, 1, 2, 1, 3, 4, 3, 2, 1, 2, 3, 2, 4, 3, 2, 3, 2, 3, '♞', 3, 3, 4, 3, 2, 1, 2, 3, 2, 4, 3, 2, 3, 4, 1, 2, 1, 3, 4, 3, 2, 3, 2, 3, 2], [5, 4, 3, 4, 3, 2, 3, 2, 4, 3, 4, 3, 2, 3, 2, 3, 5, 4, 3, 2, 3, 4, 1, 2, 4, 3, 4, 3, 2, 1, 2, 3, 5, 4, 3, 2, 3, 2, 3, '♞', 4, 3, 4, 3, 2, 1, 2, 3, 5, 4, 3, 2, 3, 4, 1, 2, 4, 3, 4, 3, 2, 3, 2, 3], [3, 4, 3, 4, 3, 4, 5, 4, 2, 3, 2, 3, 4, 3, 4, 5, 3, 2, 3, 2, 3, 4, 3, 4, 2, 1, 4, 3, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 3, 4, '♞', 3, 2, 3, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 3, 4, 2, 1, 4, 3, 2, 3, 4, 5], [4, 3, 4, 3, 4, 3, 4, 5, 3, 2, 3, 2, 3, 4, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3, 1, 2, 1, 4, 3, 2, 3, 4, 2, 3, 2, 1, 2, 3, 4, 3, 3, '♞', 3, 2, 3, 2, 3, 4, 2, 3, 2, 1, 2, 3, 4, 3, 1, 2, 1, 4, 3, 2, 3, 4], [3, 4, 3, 4, 3, 4, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3, 3, 2, 3, 2, 3, 2, 3, 4, 4, 1, 2, 1, 4, 3, 2, 3, 1, 2, 3, 2, 1, 2, 3, 4, 2, 3, '♞', 3, 2, 3, 2, 3, 1, 2, 3, 2, 1, 2, 3, 4, 4, 1, 2, 1, 4, 3, 2, 3], [4, 3, 4, 3, 4, 3, 4, 3, 3, 2, 3, 2, 3, 2, 3, 4, 2, 3, 2, 3, 2, 3, 2, 3, 3, 4, 1, 2, 1, 4, 3, 2, 2, 1, 2, 3, 2, 1, 2, 3, 3, 2, 3, '♞', 3, 2, 3, 2, 2, 1, 2, 3, 2, 1, 2, 3, 3, 4, 1, 2, 1, 4, 3, 2], [3, 4, 3, 4, 3, 4, 3, 4, 4, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 2, 2, 3, 4, 1, 2, 1, 4, 3, 3, 2, 1, 2, 3, 2, 1, 2, 2, 3, 2, 3, '♞', 3, 2, 3, 3, 2, 1, 2, 3, 2, 1, 2, 2, 3, 4, 1, 2, 1, 4, 3], [4, 3, 4, 3, 4, 3, 4, 3, 3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 4, 1, 2, 1, 4, 4, 3, 2, 1, 2, 3, 2, 1, 3, 2, 3, 2, 3, '♞', 3, 2, 4, 3, 2, 1, 2, 3, 2, 1, 3, 2, 3, 4, 1, 2, 1, 4], [5, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 2, 3, 2, 3, 3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 2, 3, 4, 1, 2, 1, 3, 4, 3, 2, 1, 2, 3, 2, 4, 3, 2, 3, 2, 3, '♞', 3, 3, 4, 3, 2, 1, 2, 3, 2, 4, 3, 2, 3, 4, 1, 2, 1], [4, 5, 4, 3, 4, 3, 4, 3, 5, 4, 3, 4, 3, 2, 3, 2, 4, 3, 4, 3, 2, 3, 2, 3, 5, 4, 3, 2, 3, 4, 1, 2, 4, 3, 4, 3, 2, 1, 2, 3, 5, 4, 3, 2, 3, 2, 3, '♞', 4, 3, 4, 3, 2, 1, 2, 3, 5, 4, 3, 2, 3, 4, 1, 2], [4, 3, 4, 3, 4, 5, 4, 5, 3, 4, 3, 4, 3, 4, 5, 4, 2, 3, 2, 3, 4, 3, 4, 5, 3, 2, 3, 2, 3, 4, 3, 4, 2, 1, 4, 3, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 3, 4, '♞', 3, 2, 3, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 3, 4], [3, 4, 3, 4, 3, 4, 5, 4, 4, 3, 4, 3, 4, 3, 4, 5, 3, 2, 3, 2, 3, 4, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3, 1, 2, 1, 4, 3, 2, 3, 4, 2, 3, 2, 1, 2, 3, 4, 3, 3, '♞', 3, 2, 3, 2, 3, 4, 4, 3, 2, 1, 2, 3, 4, 3], [4, 3, 4, 3, 4, 3, 4, 5, 3, 4, 3, 4, 3, 4, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3, 3, 2, 3, 2, 3, 2, 3, 4, 4, 1, 2, 1, 4, 3, 2, 3, 1, 2, 3, 2, 1, 2, 3, 4, 2, 3, '♞', 3, 2, 3, 2, 3, 1, 2, 3, 2, 1, 2, 3, 4], [3, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4, 3, 4, 3, 3, 2, 3, 2, 3, 2, 3, 4, 2, 3, 2, 3, 2, 3, 2, 3, 3, 4, 1, 2, 1, 4, 3, 2, 2, 1, 2, 3, 2, 1, 2, 3, 3, 2, 3, '♞', 3, 2, 3, 2, 2, 1, 2, 3, 2, 1, 2, 3], [4, 3, 4, 3, 4, 3, 4, 3, 3, 4, 3, 4, 3, 4, 3, 4, 4, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 2, 2, 3, 4, 1, 2, 1, 4, 3, 3, 2, 1, 2, 3, 2, 1, 2, 2, 3, 2, 3, '♞', 3, 2, 3, 3, 2, 1, 2, 3, 2, 1, 2], [5, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4, 3, 4, 3, 3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 4, 1, 2, 1, 4, 4, 3, 2, 1, 2, 3, 2, 1, 3, 2, 3, 2, 3, '♞', 3, 2, 4, 3, 2, 1, 2, 3, 2, 1], [4, 5, 4, 3, 4, 3, 4, 3, 5, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 2, 3, 2, 3, 3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 2, 3, 4, 1, 2, 1, 3, 4, 3, 2, 1, 2, 3, 2, 4, 3, 2, 3, 2, 3, '♞', 3, 3, 4, 3, 2, 1, 2, 3, 4], [5, 4, 5, 4, 3, 4, 3, 4, 4, 5, 4, 3, 4, 3, 4, 3, 5, 4, 3, 4, 3, 2, 3, 2, 4, 3, 4, 3, 2, 3, 2, 3, 5, 4, 3, 2, 3, 4, 1, 2, 4, 3, 4, 3, 2, 1, 2, 3, 5, 4, 3, 2, 3, 2, 3, '♞', 4, 3, 4, 3, 2, 1, 2, 3], [5, 4, 5, 4, 5, 4, 5, 6, 4, 3, 4, 3, 4, 5, 4, 5, 3, 4, 3, 4, 3, 4, 5, 4, 2, 3, 2, 3, 4, 3, 4, 5, 3, 2, 3, 2, 3, 4, 3, 4, 2, 1, 4, 3, 2, 3, 4, 5, 3, 4, 1, 2, 3, 4, 3, 4, '♞', 3, 2, 3, 2, 3, 4, 5], [4, 5, 4, 5, 4, 5, 4, 5, 3, 4, 3, 4, 3, 4, 5, 4, 4, 3, 4, 3, 4, 3, 4, 5, 3, 2, 3, 2, 3, 4, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3, 1, 2, 1, 4, 3, 2, 3, 4, 2, 3, 2, 1, 2, 3, 4, 3, 3, '♞', 3, 2, 3, 2, 3, 4], [5, 4, 5, 4, 5, 4, 5, 4, 4, 3, 4, 3, 4, 3, 4, 5, 3, 4, 3, 4, 3, 4, 3, 4, 2, 3, 2, 3, 2, 3, 4, 3, 3, 2, 3, 2, 3, 2, 3, 4, 4, 1, 2, 1, 4, 3, 2, 3, 1, 2, 3, 2, 1, 2, 3, 4, 2, 3, '♞', 3, 2, 3, 2, 3], [4, 5, 4, 5, 4, 5, 4, 5, 3, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4, 3, 4, 3, 3, 2, 3, 2, 3, 2, 3, 4, 2, 3, 2, 3, 2, 3, 2, 3, 3, 4, 1, 2, 1, 4, 3, 2, 2, 1, 2, 3, 2, 1, 2, 3, 3, 2, 3, '♞', 3, 2, 3, 2], [5, 4, 5, 4, 5, 4, 5, 4, 4, 3, 4, 3, 4, 3, 4, 3, 3, 4, 3, 4, 3, 4, 3, 4, 4, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 2, 2, 3, 4, 1, 2, 1, 4, 3, 3, 2, 1, 2, 3, 2, 1, 2, 2, 3, 2, 3, '♞', 3, 2, 3], [4, 5, 4, 5, 4, 5, 4, 5, 5, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4, 3, 4, 3, 3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 4, 1, 2, 1, 4, 4, 3, 2, 1, 2, 3, 2, 1, 3, 2, 3, 2, 3, '♞', 3, 2], [5, 4, 5, 4, 5, 4, 5, 4, 4, 5, 4, 3, 4, 3, 4, 3, 5, 4, 3, 4, 3, 4, 3, 4, 4, 3, 4, 3, 2, 3, 2, 3, 3, 4, 3, 2, 3, 2, 3, 2, 4, 3, 2, 3, 4, 1, 2, 1, 3, 4, 3, 2, 1, 2, 3, 2, 4, 3, 2, 3, 2, 3, '♞', 3], [6, 5, 4, 5, 4, 5, 4, 5, 5, 4, 5, 4, 3, 4, 3, 4, 4, 5, 4, 3, 4, 3, 4, 3, 5, 4, 3, 4, 3, 2, 3, 2, 4, 3, 4, 3, 2, 3, 2, 3, 5, 4, 3, 2, 3, 4, 1, 2, 4, 3, 4, 3, 2, 1, 4, 3, 5, 4, 3, 2, 3, 2, 3, '♞']]


  const [start_pos, setstart_pos] = useState(0)

  return (
   
<>
<h1>press a square to set it as the inital 
 POSITION OF THE KNIGHT </h1>
<div className='gridview'>
<button className={'_'+ot_values[start_pos][0]} onClick={() => setstart_pos(0)}>
{ot_values[start_pos][0]}
</button>
<button className={'_'+ot_values[start_pos][1]} onClick={() => setstart_pos(1)}>
{ot_values[start_pos][1]}
</button>
<button className={'_'+ot_values[start_pos][2]} onClick={() => setstart_pos(2)}>
{ot_values[start_pos][2]}
</button>
<button className={'_'+ot_values[start_pos][3]} onClick={() => setstart_pos(3)}>
{ot_values[start_pos][3]}
</button>
<button className={'_'+ot_values[start_pos][4]} onClick={() => setstart_pos(4)}>
{ot_values[start_pos][4]}
</button>
<button className={'_'+ot_values[start_pos][5]} onClick={() => setstart_pos(5)}>
{ot_values[start_pos][5]}
</button>
<button className={'_'+ot_values[start_pos][6]} onClick={() => setstart_pos(6)}>
{ot_values[start_pos][6]}
</button>
<button className={'_'+ot_values[start_pos][7]} onClick={() => setstart_pos(7)}>
{ot_values[start_pos][7]}
</button>
<button className={'_'+ot_values[start_pos][8]} onClick={() => setstart_pos(8)}>
{ot_values[start_pos][8]}
</button>
<button className={'_'+ot_values[start_pos][9]} onClick={() => setstart_pos(9)}>
{ot_values[start_pos][9]}
</button>
<button className={'_'+ot_values[start_pos][10]} onClick={() => setstart_pos(10)}>
{ot_values[start_pos][10]}
</button>
<button className={'_'+ot_values[start_pos][11]} onClick={() => setstart_pos(11)}>
{ot_values[start_pos][11]}
</button>
<button className={'_'+ot_values[start_pos][12]} onClick={() => setstart_pos(12)}>
{ot_values[start_pos][12]}
</button>
<button className={'_'+ot_values[start_pos][13]} onClick={() => setstart_pos(13)}>
{ot_values[start_pos][13]}
</button>
<button className={'_'+ot_values[start_pos][14]} onClick={() => setstart_pos(14)}>
{ot_values[start_pos][14]}
</button>
<button className={'_'+ot_values[start_pos][15]} onClick={() => setstart_pos(15)}>
{ot_values[start_pos][15]}
</button>
<button className={'_'+ot_values[start_pos][16]} onClick={() => setstart_pos(16)}>
{ot_values[start_pos][16]}
</button>
<button className={'_'+ot_values[start_pos][17]} onClick={() => setstart_pos(17)}>
{ot_values[start_pos][17]}
</button>
<button className={'_'+ot_values[start_pos][18]} onClick={() => setstart_pos(18)}>
{ot_values[start_pos][18]}
</button>
<button className={'_'+ot_values[start_pos][19]} onClick={() => setstart_pos(19)}>
{ot_values[start_pos][19]}
</button>
<button className={'_'+ot_values[start_pos][20]} onClick={() => setstart_pos(20)}>
{ot_values[start_pos][20]}
</button>
<button className={'_'+ot_values[start_pos][21]} onClick={() => setstart_pos(21)}>
{ot_values[start_pos][21]}
</button>
<button className={'_'+ot_values[start_pos][22]} onClick={() => setstart_pos(22)}>
{ot_values[start_pos][22]}
</button>
<button className={'_'+ot_values[start_pos][23]} onClick={() => setstart_pos(23)}>
{ot_values[start_pos][23]}
</button>
<button className={'_'+ot_values[start_pos][24]} onClick={() => setstart_pos(24)}>
{ot_values[start_pos][24]}
</button>
<button className={'_'+ot_values[start_pos][25]} onClick={() => setstart_pos(25)}>
{ot_values[start_pos][25]}
</button>
<button className={'_'+ot_values[start_pos][26]} onClick={() => setstart_pos(26)}>
{ot_values[start_pos][26]}
</button>
<button className={'_'+ot_values[start_pos][27]} onClick={() => setstart_pos(27)}>
{ot_values[start_pos][27]}
</button>
<button className={'_'+ot_values[start_pos][28]} onClick={() => setstart_pos(28)}>
{ot_values[start_pos][28]}
</button>
<button className={'_'+ot_values[start_pos][29]} onClick={() => setstart_pos(29)}>
{ot_values[start_pos][29]}
</button>
<button className={'_'+ot_values[start_pos][30]} onClick={() => setstart_pos(30)}>
{ot_values[start_pos][30]}
</button>
<button className={'_'+ot_values[start_pos][31]} onClick={() => setstart_pos(31)}>
{ot_values[start_pos][31]}
</button>
<button className={'_'+ot_values[start_pos][32]} onClick={() => setstart_pos(32)}>
{ot_values[start_pos][32]}
</button>
<button className={'_'+ot_values[start_pos][33]} onClick={() => setstart_pos(33)}>
{ot_values[start_pos][33]}
</button>
<button className={'_'+ot_values[start_pos][34]} onClick={() => setstart_pos(34)}>
{ot_values[start_pos][34]}
</button>
<button className={'_'+ot_values[start_pos][35]} onClick={() => setstart_pos(35)}>
{ot_values[start_pos][35]}
</button>
<button className={'_'+ot_values[start_pos][36]} onClick={() => setstart_pos(36)}>
{ot_values[start_pos][36]}
</button>
<button className={'_'+ot_values[start_pos][37]} onClick={() => setstart_pos(37)}>
{ot_values[start_pos][37]}
</button>
<button className={'_'+ot_values[start_pos][38]} onClick={() => setstart_pos(38)}>
{ot_values[start_pos][38]}
</button>
<button className={'_'+ot_values[start_pos][39]} onClick={() => setstart_pos(39)}>
{ot_values[start_pos][39]}
</button>
<button className={'_'+ot_values[start_pos][40]} onClick={() => setstart_pos(40)}>
{ot_values[start_pos][40]}
</button>
<button className={'_'+ot_values[start_pos][41]} onClick={() => setstart_pos(41)}>
{ot_values[start_pos][41]}
</button>
<button className={'_'+ot_values[start_pos][42]} onClick={() => setstart_pos(42)}>
{ot_values[start_pos][42]}
</button>
<button className={'_'+ot_values[start_pos][43]} onClick={() => setstart_pos(43)}>
{ot_values[start_pos][43]}
</button>
<button className={'_'+ot_values[start_pos][44]} onClick={() => setstart_pos(44)}>
{ot_values[start_pos][44]}
</button>
<button className={'_'+ot_values[start_pos][45]} onClick={() => setstart_pos(45)}>
{ot_values[start_pos][45]}
</button>
<button className={'_'+ot_values[start_pos][46]} onClick={() => setstart_pos(46)}>
{ot_values[start_pos][46]}
</button>
<button className={'_'+ot_values[start_pos][47]} onClick={() => setstart_pos(47)}>
{ot_values[start_pos][47]}
</button>
<button className={'_'+ot_values[start_pos][48]} onClick={() => setstart_pos(48)}>
{ot_values[start_pos][48]}
</button>
<button className={'_'+ot_values[start_pos][49]} onClick={() => setstart_pos(49)}>
{ot_values[start_pos][49]}
</button>
<button className={'_'+ot_values[start_pos][50]} onClick={() => setstart_pos(50)}>
{ot_values[start_pos][50]}
</button>
<button className={'_'+ot_values[start_pos][51]} onClick={() => setstart_pos(51)}>
{ot_values[start_pos][51]}
</button>
<button className={'_'+ot_values[start_pos][52]} onClick={() => setstart_pos(52)}>
{ot_values[start_pos][52]}
</button>
<button className={'_'+ot_values[start_pos][53]} onClick={() => setstart_pos(53)}>
{ot_values[start_pos][53]}
</button>
<button className={'_'+ot_values[start_pos][54]} onClick={() => setstart_pos(54)}>
{ot_values[start_pos][54]}
</button>
<button className={'_'+ot_values[start_pos][55]} onClick={() => setstart_pos(55)}>
{ot_values[start_pos][55]}
</button>
<button className={'_'+ot_values[start_pos][56]} onClick={() => setstart_pos(56)}>
{ot_values[start_pos][56]}
</button>
<button className={'_'+ot_values[start_pos][57]} onClick={() => setstart_pos(57)}>
{ot_values[start_pos][57]}
</button>
<button className={'_'+ot_values[start_pos][58]} onClick={() => setstart_pos(58)}>
{ot_values[start_pos][58]}
</button>
<button className={'_'+ot_values[start_pos][59]} onClick={() => setstart_pos(59)}>
{ot_values[start_pos][59]}
</button>
<button className={'_'+ot_values[start_pos][60]} onClick={() => setstart_pos(60)}>
{ot_values[start_pos][60]}
</button>
<button className={'_'+ot_values[start_pos][61]} onClick={() => setstart_pos(61)}>
{ot_values[start_pos][61]}
</button>
<button className={'_'+ot_values[start_pos][62]} onClick={() => setstart_pos(62)}>
{ot_values[start_pos][62]}
</button>
<button className={'_'+ot_values[start_pos][63]} onClick={() => setstart_pos(63)}>
{ot_values[start_pos][63]}
</button>
</div>
<footer>
  <p>find the creator @</p>
  
 <a href="https://github.com/bchiang7" aria-label="GitHub" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
  <a href="https://www.instagram.com/zodwick_/?igshid=YmMyMTA2M2Y%3D" aria-label="Instagram" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
  <a href="https://www.linkedin.com/in/bchiang7" aria-label="Linkedin" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
  
</footer>

</>
  );
}
