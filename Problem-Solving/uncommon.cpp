// C++ program to find uncommon elements of
// two sorted arrays
#include <bits/stdc++.h>
using namespace std;

void printUncommon(int arr1[], int arr2[], int n1, int n2){

	int i = 0, j = 0, k = 0;
	while (i < n1 && j < n2) {
		// If not common, print smaller
		if (arr1[i] < arr2[j]) {
			cout << arr1[i] << " ";
			i++;
			k++;
		}
		else if (arr2[j] < arr1[i]) {
			cout << arr2[j] << " ";
			k++;
			j++;
		}
		// Skip common element
		else {
			i++;
			j++;
		}
	}
	// printing remaining elements
	while (i < n1) {
		cout << arr1[i] << " ";
		i++;
		k++;
	}
	while (j < n2) {
		cout << arr2[j] << " ";
		j++;
		k++;
	}
}

// Driver code
int main(){
	int arr1[] = {10, 20, 30};
	int arr2[] = {20, 25, 30, 40, 50};

	int n1 = sizeof(arr1) / sizeof(arr1[0]);
	int n2 = sizeof(arr2) / sizeof(arr2[0]);

	printUncommon(arr1, arr2, n1, n2);

	return 0;
}
