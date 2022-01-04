// LRU using Arrays
// Complexity: O(1)
class LRU {
	constructor(limit) {
		this.limit = limit;
		this.store = []; // [['a', 1], ['b', 1]]
	}

	get(key) {
		const idx = this.store.findIndex(([k]) => k === key);
		if (idx !== null) {
			const val = this.store[idx][1];
			this.store.splice(idx, 1);
			this.store.push([key, val]);
			return val;
		}
		return null;
	}

	put(key, value) {
		const idx = this.store.findIndex(([k, v]) => k === key);
		if (idx === -1) {
			if (this.store.length === this.limit) {
				this.store.shift();
			}
			this.store.push([key, value]);
			return;
		}

		this.store.splice(idx, 1);
		this.store.push([key, value]);
	}
}

const x = new LRU(4);

x.put("a", 1);
x.put("b", 1);
x.put("c", 1);
x.put("d", 1);
x.get("a");
x.put("e", 1);
x;
