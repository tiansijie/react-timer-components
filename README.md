# react-timer-components


## Install
```npm install react-timer-components```

## How to use
* Delay
    ```jsx
        <Delay seconds={3}>
            <div>Delay me</div>
        </Delay>
    ```
* Debounce
    ```jsx
        <Debounce second={3}>
            <div>Show up after mouse is not moving for 3 seconds</div>
        </Debounce>
    ```

* Expire
    ```jsx
        <Expire seconds={3}>
            <div>Expire in 3 seconds</div>
        </Expire>
    ```
* Interval
    ```jsx
        <Interval interval={500} time={200}>
            <div>display every 500 ms for 200 ms long</div>
        </Interval>
    ```