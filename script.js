const blocks = [0, 4, 0, 0, 0, 6, 0, 6, 4, 0];

        function drawTank(blocks) {
            const svg = document.getElementById('tank');
            svg.innerHTML = '';

            const blockWidth = 30;
            const blockMargin = 7;

            blocks.forEach((height, index) => {
                const x = index * (blockWidth + blockMargin);
                const y = svg.getAttribute('height') - height * 20;

                const rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
                rect.setAttribute('x', x);
                rect.setAttribute('y', y);
                rect.setAttribute('width', blockWidth);
                rect.setAttribute('height', height * 20);
                svg.appendChild(rect);
            });
        }

        function calculateWater(units) {
            let totalUnits = 0;

            for (let i = 1; i < units.length - 1; i++) {
                const leftMax = Math.max(...units.slice(0, i));
                const rightMax = Math.max(...units.slice(i + 1));
                const minHeight = Math.min(leftMax, rightMax);

                if (minHeight > units[i]) {
                    totalUnits += minHeight - units[i];
                }
            }

            return totalUnits;
        }

        drawTank(blocks);

        const result = calculateWater(blocks);
        const output=document.getElementById("output")
        output.innerHTML=`${result} units`

     



        