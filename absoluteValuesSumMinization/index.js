Frontend
    ```
const handleDeleteProperty = async (id) => {
    try{
   const res = await Axios.delete('url', id);
   if(res.data.success){
      alert(res.data.msg);
   }
}
catch(err){
console.error(err);
}
}
```
    ```
<td><a onClick={e => handleDeleteProperty(property.id)}>{DeleteBtn}</a></td>

```

Backend
    ```
router.delete('url', auth, async (req, res) => {
  await Product.findByIdAndDelete(req.body.id);
  return res.status(200).json({ success: true, msg: 'Product Deleted' });
});
```