var numo: number = 17;
var monresu: boolean;



function is_prime(n: number): boolean {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}


function get_primes(n: number): number[] {
    let prime_list: number[] = [];
    for (let i = 2; i < n; i++) {
        let resulto: boolean = is_prime(i)
        if (resulto) {
            prime_list.push(i)
        }

    }
    return prime_list

}

function prime_factors(n: number): number[] {
    let res: number[] = [];
    let prime_list: number[] = get_primes(n);
    while (n != 1) {
        for (let i = 0; i < prime_list.length; i++) {
            if (n % prime_list[i] ==0 ){
                res.push(prime_list[i]);
                n=n/prime_list[i];
                break
            }
        }

    }
    return res
}

console.log(prime_factors(160)); // [2,2,2,2,2,5]