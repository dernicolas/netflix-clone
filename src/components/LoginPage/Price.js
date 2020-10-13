import React from 'react';
import './price.css';

function Price(){

	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>Basic</th>
						<th>Standard</th>
						<th>Premium</th>
					</tr>
					<tr>
						<th colSpan='3'>Monthly price after free month ends on 5/30/19</th>
					</tr>
					<tr>
						<td>$8.99</td>
						<td>$12.99</td>
						<td>$15.99</td>
					</tr>
					<tr>
						<th colSpan='3'>HD Available</th>
					</tr>
					<tr>
						<td><i class="fas fa-times"></i></td>
						<td><i class="fas fa-check"></i></td>
						<td><i class="fas fa-check"></i></td>
					</tr>
					<tr>
						<th colSpan='3'>Ultra HD Available</th>
					</tr>
					<tr>
						<td><i class="fas fa-times"></i></td>
						<td><i class="fas fa-times"></i></td>
						<td><i class="fas fa-check"></i></td>
					</tr>
					<tr>
						<th colSpan='3'>Screens you can watch on at the same time</th>
					</tr>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>4</td>
					</tr>
					<tr>
						<th colSpan='3'>Watch on your laptop, TV, phone and tablet</th>
					</tr>
					<tr>
						<td><i class="fas fa-check"></i></td>
						<td><i class="fas fa-check"></i></td>
						<td><i class="fas fa-check"></i></td>
					</tr>
					<tr>
						<th colSpan='3'>Unlimited movies and TV shows</th>
					</tr>
					<tr>
						<td><i class="fas fa-check"></i></td>
						<td><i class="fas fa-check"></i></td>
						<td><i class="fas fa-check"></i></td>
					</tr>
					<tr>
						<th colSpan='3'>Cancel anytime</th>
					</tr>
					<tr>
						<td><i class="fas fa-check"></i></td>
						<td><i class="fas fa-check"></i></td>
						<td><i class="fas fa-check"></i></td>
					</tr>
					<tr>
						<th colSpan='3'>First month free</th>
					</tr>
					<tr>
						<td><i class="fas fa-check"></i></td>
						<td><i class="fas fa-check"></i></td>
						<td><i class="fas fa-check"></i></td>
					</tr>
				</tbody>
			</table>
		</div>
		)
};

export default Price;