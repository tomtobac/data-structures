// LRU using hash/maps
// Complexity: O(1)
class LRU {
	constructor(limit) {
		this.limit = limit;
		this.map = new Map();
	}

	get(key) {
		if (this.map.get(key)) {
			const val = this.map.get(key);
			this.map.delete(key);
			this.map.set(key, val);
			return val;
		} else {
			return null;
		}
	}

	put(key, value) {
		if (this.get(key) === null) {
			if (this.map.size === this.limit) {
				for (const [innerKey, _] of this.map) {
					this.map.delete(innerKey);
					break;
				}
			}
		}
		this.map.set(key, value);
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
