import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	
	let title: String;
	let question: String;
	let levelNumber: String;

	switch (params.level) {
		case "2018A":
			title = "2018 CSA FRQ A";
			question = `This question involves reasoning about arrays of integers. You will write two static methods, both of which are in a class named ArrayTester.
 
			public class ArrayTester { 
			/* 
			Returns an array containing the elements of column c of arr2D in the same order as they appear in arr2D. 
			Precondition: c is a valid column index in arr2D. 
			Postcondition: arr2D is unchanged. 
			*/ 
			public static int [] getColumn (int [1 [] arr2D, int c) 
			{ /* Your code goes here */ } 
			
			/*
			Returns true if and only if every value in arr1 appears in arr2. 
			Precondition: arr1 and arr2 have the same length. • Postcondition: arr1 and arr2 are unchanged.
			 */ 
			public static boolean hasAllValues (int [] arr1, int [] arr2) 
			{ /* implementation not shown */ }
			
			// Returns true if arr contains any duplicate values; false otherwise. 
			public static boolean containsDuplicates (int [] arr) 
			{ /* implementation not shown */ }
			
			} 
			
			Write a static method getColumn, which returns a one-dimensional array containing the elements of a single column in a two-dimensional array. The elements in the returned array should be in the same order as they appear in the given column. The notation arr2D [r] [c] represents the array element at row r and column c. 
			The following code segment initializes an array and calls the getColumn method. 
			int[][] arr2D = { { 0, 1, 2 } , { 3, 4, 5 } , { 6, 7, 8 } , { 9, 5, 3 } }; 
			int[] result = ArrayTester.getColumn (arr2D, 1)
			When the code segment has completed execution, the variable result will have the following contents: {1, 4, 7, 5} 
			
			public static int[] getColumn (int[] arr2D, int c) {
			
			CODE TEXTBOX
			
			}
			`;
			levelNumber = "1";
			break;
		default:
			throw error(404, 'Not found');
	}
	return {
		title: title,
		question: question,
		levelNumber: levelNumber
	};
}