#include <stdio.h>
int sumOfDigits (int number);    
int fac(int number);

    int main(){
    int a,b,x,y,p,q;

    printf("Enter any two numbers: ");
    scanf("%d %d",&a,&b);

    x=b/a;
    y=x||x;
    p=a-y*(a-b);
    q=b+y*(a-b);

    printf("%d > %d\n",p,q);

    fac(p);
    sumOfDigits(q);

    return 0;

}

int fac(int number) {    
 int i, fact=1;   
    for(i=1;i<=number;i++){    
      fact=fact*i;    
  }    

  printf("Factorial of %d is: %d\n",number,fact);    
return 0;  

}   

int sumOfDigits (int number){    
    int sum=0,m;    
    while(number>0){    
            m=number%10;    
            sum=sum+m;    
            number=number/10;    
        }    
    printf("Sum is=%d\n",sum);    
    return 0;  
}   