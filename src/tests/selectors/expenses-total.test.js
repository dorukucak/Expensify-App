import sum from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';



test('should add up filtered amount', () => {
    const total = 114195;
    const res = sum([expenses[0]]);
    expect(res).toBe(195);
});

test('should add up multiple filtered amounts', () => {
    const total = 114195;
    const res = sum(expenses)
    expect(res).toBe(total);
});


