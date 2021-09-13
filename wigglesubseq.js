var wiggleMaxLength = function(nums) {
     let len = nums.length;
        if (len == 0) return 0;

        // Initialize rise and drop array.
        let rise = [len];
        let drop = [len];
        rise[0] = 1;
        drop[0] = 1;

        for (let i = 1; i < len; i++){
            let cur = nums[i];
            let pre = nums[i - 1];
            // rise
            if (cur > pre){
                rise[i] = drop[i - 1] + 1;
                drop[i] = drop[i - 1];
            }
            // drop
            else if (cur < pre){
                drop[i] = rise[i - 1] + 1;
                rise[i] = rise[i - 1];
            }
            // Two adjacent elements are equal.
            else {
                rise[i] = rise[i - 1];
                drop[i] = drop[i - 1];
            }
        }
        return Math.max(rise[len - 1], drop[len - 1]);
    }

