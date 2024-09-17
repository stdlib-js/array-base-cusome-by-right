/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection, AccessorArrayLike, TypedArray, BooleanArray } from '@stdlib/types/array';

/**
* Checks whether an element in a collection passes a test.
*
* @returns boolean indicating whether an element in a collection passes a test
*/
type Nullary<U> = ( this: U ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @returns boolean indicating whether an element in a collection passes a test
*/
type Unary<T, U> = ( this: U, value: T ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @returns boolean indicating whether an element in a collection passes a test
*/
type Binary<T, U> = ( this: U, value: T, index: number ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Ternary<T, U> = ( this: U, value: T, index: number, collection: Collection<T> ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Predicate<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Interface describing `cusomeByRight`.
*/
interface CusomeByRight {
	/**
	* Cumulatively test whether at least `n` elements in a provided array pass a test implemented by a predicate function, while iterating from right-to-left.
	*
	* @param x - input array
	* @param n - number of elements
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* function fcn( v ) {
	*     return v > 0;
	* }
	* var x = [ 0, 1, 1, 0, 0 ];
	*
	* var y = cusomeByRight( x, 2, fcn );
	* // returns [ false, false, false, true, true ];
	*/
	<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, n: number, predicate: Predicate<T, U>, thisArg?: ThisParameterType<Predicate<T, U>> ): Array<boolean>;

	/**
	* Cumulatively test whether at least `n` elements in a provided array pass a test implemented by a predicate function, while iterating from right-to-left and assigns the results to the provided output array.
	*
	* @param x - input array
	* @param n - number of elements
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* function fcn( v ) {
	*     return v > 0;
	* }
	* var x = [ 1, 1, 0, 0, 0 ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = cusomeByRight.assign( x, 2, y, 2, 0, fcn );,
	* // returns [ false, null, false, null, false, null, false, null, true, null ];
	*/
	assign<T = unknown, U = unknown, V = unknown>( x: Collection<T> | AccessorArrayLike<T>, n: number, out: Array<U>, stride: number, offset: number, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): Array<U | boolean>;

	/**
	* Cumulatively test whether at least `n` elements in a provided array pass a test implemented by a predicate function, while iterating from right-to-left and assigns the results to the provided output array.
	*
	* @param x - input array
	* @param n - number of elements
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* function fcn( v ) {
	*     return v > 0;
	* }
	* var x = [ 1, 1, 0, 0, 0 ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = cusomeByRight.assign( x, 2, y, 2, 0, fcn );,
	* // returns [ false, null, false, null, false, null, false, null, true, null ];
	*/
	assign<T, U extends TypedArray | BooleanArray, V = unknown>( x: Collection<T> | AccessorArrayLike<T>, n: number, out: U, stride: number, offset: number, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): U;

	/**
	* Cumulatively tests whether no array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left, and assigns the results to the provided output array.
	*
	* @param x - input array
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* function isPositive( v ) {
	*     return ( v > 0 );
	* }
	* var x = [ 0, 0, 0, 1, 0 ];
	* var y = [ false, null, false, null, false, null, false, null, false, null ];
	*
	* var arr = cunoneBy.cunoneByRight( x, y, 2, 0, isPositive );,
	* // returns [ true, null, false, null, false, null, false, null, false, null ]
	*/
	assign<T = unknown, U = unknown, V = unknown>( x: Collection<T> | AccessorArrayLike<T>, out: Collection<U> | AccessorArrayLike<U>, stride: number, offset: number, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): Collection<U | boolean> | AccessorArrayLike<U | boolean>;
}

/**
* Cumulatively test whether at least `n` elements in a provided array pass a test implemented by a predicate function, while iterating from right-to-left.
*
* @param x - input array
* @param n - number of elements
* @param predicate - test function
* @param thisArg - execution context
* @returns output array
*
* @example
* function fcn( v ) {
*     return v > 0;
* }
* var x = [ 1, 1, 0, 0, 0 ];
*
* var result = cusomeByright( x, 2, fcn );
* // returns [ false, false, false, false, true ]
*
* @example
* function fcn( v ) {
*     return v > 0;
* }
* var x = [ 0, 1, 1, 0, 0 ];
* var y = [ false, null, false, null, false, null, false, null, false, null ];
*
* var arr = cusomeByRight.assign( x, 2, y, 2, 0, fcn );
* // returns [ false, null, false, null, false, null, true, null, true, null ]
*/
declare var cusomeByRight: CusomeByRight;


// EXPORTS //

export = cusomeByRight;