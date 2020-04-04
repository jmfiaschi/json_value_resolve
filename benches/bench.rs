use criterion::{black_box, criterion_group, criterion_main, Criterion};
use json_value_resolve::Resolve;
use serde_json::Value;

fn merge(c: &mut Criterion) {
    let mut group = c.benchmark_group("Resolve");

    group.bench_function("Bench Value::resolve(scalar_null).", |b| {
        b.iter(|| black_box(Value::resolve("null".to_string())))
    });
    group.bench_function("Bench Value::resolve(scalar_unsigned).", |b| {
        b.iter(|| black_box(Value::resolve("10".to_string())))
    });
    group.bench_function("Bench Value::resolve(scalar_signed).", |b| {
        b.iter(|| black_box(Value::resolve("-00010000".to_string())))
    });
    group.bench_function("Bench Value::resolve(scalar_float).", |b| {
        b.iter(|| black_box(Value::resolve("10.50".to_string())))
    });
    group.bench_function("Bench Value::resolve(scalar_float_signed).", |b| {
        b.iter(|| black_box(Value::resolve("-10.50".to_string())))
    });
    group.bench_function("Bench Value::resolve(scalar_bool).", |b| {
        b.iter(|| black_box(Value::resolve("true".to_string())))
    });
    group.bench_function("Bench Value::resolve(scalar_char).", |b| {
        b.iter(|| black_box(Value::resolve("my string".to_string())))
    });
    group.finish();
}

criterion_group!(benches, merge);
criterion_main!(benches);
